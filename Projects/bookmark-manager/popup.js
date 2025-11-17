document.addEventListener('DOMContentLoaded', function() {
  const bookmarksList = document.getElementById('bookmarksList');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const selectAllBtn = document.getElementById('selectAll');
  const deselectAllBtn = document.getElementById('deselectAll');
  const moveSelectedBtn = document.getElementById('moveSelected');
  const deleteSelectedBtn = document.getElementById('deleteSelected');
  const targetFolder = document.getElementById('targetFolder');
  const createFolderBtn = document.getElementById('createFolder');
  const bookmarkCount = document.getElementById('bookmarkCount');
  const selectedCount = document.getElementById('selectedCount');
  const quickFolderBtns = document.querySelectorAll('.folder-btn');

  let allBookmarks = [];
  let selectedBookmarks = new Set();

  // Load bookmarks and folders
  loadBookmarks();
  loadFolders();

  // Event listeners
  searchInput.addEventListener('input', filterBookmarks);
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    filterBookmarks();
  });

  selectAllBtn.addEventListener('click', selectAllBookmarks);
  deselectAllBtn.addEventListener('click', deselectAllBookmarks);
  moveSelectedBtn.addEventListener('click', moveSelectedBookmarks);
  deleteSelectedBtn.addEventListener('click', deleteSelectedBookmarks);
  createFolderBtn.addEventListener('click', createNewFolder);

  quickFolderBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const folderName = this.getAttribute('data-folder');
      moveToQuickFolder(folderName);
    });
  });

  // Load all bookmarks
  function loadBookmarks() {
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      allBookmarks = flattenBookmarks(bookmarkTreeNodes);
      displayBookmarks(allBookmarks);
      updateStats();
    });
  }

  // Flatten bookmark tree to a simple array
  function flattenBookmarks(nodes) {
    let bookmarks = [];
    
    nodes.forEach(node => {
      if (node.url) {
        bookmarks.push(node);
      }
      
      if (node.children) {
        bookmarks = bookmarks.concat(flattenBookmarks(node.children));
      }
    });
    
    return bookmarks;
  }

  // Display bookmarks in the list
  function displayBookmarks(bookmarks) {
    bookmarksList.innerHTML = '';
    
    if (bookmarks.length === 0) {
      bookmarksList.innerHTML = '<div class="empty-state">No bookmarks found</div>';
      return;
    }
    
    bookmarks.forEach(bookmark => {
      const bookmarkItem = document.createElement('div');
      bookmarkItem.className = 'bookmark-item';
      
      const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(bookmark.url).hostname}&sz=16`;
      
      bookmarkItem.innerHTML = `
        <input type="checkbox" class="bookmark-checkbox" data-id="${bookmark.id}">
        <img class="bookmark-favicon" src="${faviconUrl}" alt="Favicon">
        <span class="bookmark-title">${bookmark.title}</span>
        <span class="bookmark-url">${bookmark.url}</span>
      `;
      
      bookmarksList.appendChild(bookmarkItem);
    });
    
    // Add event listeners to checkboxes
    document.querySelectorAll('.bookmark-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const bookmarkId = this.getAttribute('data-id');
        
        if (this.checked) {
          selectedBookmarks.add(bookmarkId);
        } else {
          selectedBookmarks.delete(bookmarkId);
        }
        
        updateStats();
      });
    });
  }

  // Filter bookmarks based on search input
  function filterBookmarks() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (!searchTerm) {
      displayBookmarks(allBookmarks);
      return;
    }
    
    const filteredBookmarks = allBookmarks.filter(bookmark => 
      bookmark.title.toLowerCase().includes(searchTerm) || 
      bookmark.url.toLowerCase().includes(searchTerm)
    );
    
    displayBookmarks(filteredBookmarks);
  }

  // Load folders into the dropdown
  function loadFolders() {
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      const folders = getFolders(bookmarkTreeNodes);
      targetFolder.innerHTML = '<option value="">Select folder to move to...</option>';
      
      folders.forEach(folder => {
        const option = document.createElement('option');
        option.value = folder.id;
        option.textContent = folder.title;
        targetFolder.appendChild(option);
      });
    });
  }

  // Extract folders from bookmark tree
  function getFolders(nodes) {
    let folders = [];
    
    nodes.forEach(node => {
      if (node.children && !node.url) {
        folders.push({
          id: node.id,
          title: node.title
        });
        
        if (node.children) {
          folders = folders.concat(getFolders(node.children));
        }
      }
    });
    
    return folders;
  }

  // Select all bookmarks
  function selectAllBookmarks() {
    const checkboxes = document.querySelectorAll('.bookmark-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
      selectedBookmarks.add(checkbox.getAttribute('data-id'));
    });
    
    updateStats();
  }

  // Deselect all bookmarks
  function deselectAllBookmarks() {
    const checkboxes = document.querySelectorAll('.bookmark-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    selectedBookmarks.clear();
    updateStats();
  }

  // Move selected bookmarks to target folder
  function moveSelectedBookmarks() {
    const targetFolderId = targetFolder.value;
    
    if (!targetFolderId) {
      alert('Please select a target folder');
      return;
    }
    
    if (selectedBookmarks.size === 0) {
      alert('Please select bookmarks to move');
      return;
    }
    
    selectedBookmarks.forEach(bookmarkId => {
      chrome.bookmarks.move(bookmarkId, {
        parentId: targetFolderId
      });
    });
    
    alert(`Moved ${selectedBookmarks.size} bookmarks`);
    selectedBookmarks.clear();
    loadBookmarks();
  }

  // Delete selected bookmarks
  function deleteSelectedBookmarks() {
    if (selectedBookmarks.size === 0) {
      alert('Please select bookmarks to delete');
      return;
    }
    
    if (confirm(`Are you sure you want to delete ${selectedBookmarks.size} bookmarks?`)) {
      selectedBookmarks.forEach(bookmarkId => {
        chrome.bookmarks.remove(bookmarkId);
      });
      
      selectedBookmarks.clear();
      loadBookmarks();
    }
  }

  // Create a new folder
  function createNewFolder() {
    const folderName = prompt('Enter folder name:');
    
    if (folderName) {
      chrome.bookmarks.create({
        title: folderName
      }, function(newFolder) {
        loadFolders();
        targetFolder.value = newFolder.id;
      });
    }
  }

  // Move to quick folder (create if doesn't exist)
  function moveToQuickFolder(folderName) {
    if (selectedBookmarks.size === 0) {
      alert('Please select bookmarks to move');
      return;
    }
    
    // Find or create the folder
    chrome.bookmarks.search({title: folderName}, function(results) {
      let folder = results.find(node => !node.url);
      
      if (!folder) {
        chrome.bookmarks.create({
          title: folderName
        }, function(newFolder) {
          moveBookmarksToFolder(newFolder.id);
        });
      } else {
        moveBookmarksToFolder(folder.id);
      }
    });
    
    function moveBookmarksToFolder(folderId) {
      selectedBookmarks.forEach(bookmarkId => {
        chrome.bookmarks.move(bookmarkId, {
          parentId: folderId
        });
      });
      
      alert(`Moved ${selectedBookmarks.size} bookmarks to ${folderName}`);
      selectedBookmarks.clear();
      loadBookmarks();
    }
  }

  // Update statistics
  function updateStats() {
    bookmarkCount.textContent = `${allBookmarks.length} bookmarks`;
    selectedCount.textContent = `${selectedBookmarks.size} selected`;
  }
});