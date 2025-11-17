// Background script for the bookmark manager
chrome.runtime.onInstalled.addListener(() => {
  console.log('Bookmark Manager extension installed');
});

// Listen for bookmark changes to update the UI if needed
chrome.bookmarks.onCreated.addListener(() => {
  // Could send message to popup if it's open to refresh
});

chrome.bookmarks.onRemoved.addListener(() => {
  // Could send message to popup if it's open to refresh
});

chrome.bookmarks.onMoved.addListener(() => {
  // Could send message to popup if it's open to refresh
});

chrome.bookmarks.onChanged.addListener(() => {
  // Could send message to popup if it's open to refresh
});