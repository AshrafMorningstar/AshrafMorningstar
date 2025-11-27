<?php
/**
 * Simple PHP CMS
 * Author: Ashraf Siddiqui
 * GitHub: https://github.com/AshrafMorningstar
 */

session_start();

class CMS {
    private $posts = [];

    public function __construct() {
        if (isset($_SESSION['posts'])) {
            $this->posts = $_SESSION['posts'];
        }
    }

    public function addPost($title, $content) {
        $post = [
            'id' => count($this->posts) + 1,
            'title' => htmlspecialchars($title),
            'content' => htmlspecialchars($content),
            'created_at' => date('Y-m-d H:i:s')
        ];
        $this->posts[] = $post;
        $_SESSION['posts'] = $this->posts;
        return $post;
    }

    public function getPosts() {
        return array_reverse($this->posts);
    }

    public function deletePost($id) {
        $this->posts = array_filter($this->posts, function($post) use ($id) {
            return $post['id'] != $id;
        });
        $_SESSION['posts'] = $this->posts;
    }
}

$cms = new CMS();

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        if ($_POST['action'] === 'add' && !empty($_POST['title'])) {
            $cms->addPost($_POST['title'], $_POST['content']);
            header('Location: index.php');
            exit;
        } elseif ($_POST['action'] === 'delete') {
            $cms->deletePost($_POST['id']);
            header('Location: index.php');
            exit;
        }
    }
}

$posts = $cms->getPosts();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP CMS - Ashraf Siddiqui</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        .header {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .header h1 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }
        .header p {
            color: #666;
        }
        .form-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .form-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: bold;
        }
        input[type="text"], textarea {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        textarea {
            min-height: 100px;
            resize: vertical;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.75rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
        }
        button:hover {
            opacity: 0.9;
        }
        .post {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        .post h3 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }
        .post-meta {
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        .delete-btn {
            background: #e74c3c;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }
        .footer {
            text-align: center;
            color: white;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📝 Simple CMS</h1>
            <p>Created by Ashraf Siddiqui</p>
            <p>GitHub: <a href="https://github.com/AshrafMorningstar" target="_blank">https://github.com/AshrafMorningstar</a></p>
        </div>

        <div class="form-card">
            <h2>Create New Post</h2>
            <form method="POST">
                <input type="hidden" name="action" value="add">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" name="title" required>
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea name="content" required></textarea>
                </div>
                <button type="submit">Publish Post</button>
            </form>
        </div>

        <div class="posts">
            <h2 style="color: white; margin-bottom: 1rem;">Recent Posts</h2>
            <?php if (empty($posts)): ?>
                <p style="color: white;">No posts yet. Create your first post above!</p>
            <?php else: ?>
                <?php foreach ($posts as $post): ?>
                    <div class="post">
                        <h3><?php echo $post['title']; ?></h3>
                        <div class="post-meta">Posted on <?php echo $post['created_at']; ?></div>
                        <p><?php echo nl2br($post['content']); ?></p>
                        <form method="POST" style="margin-top: 1rem;">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?php echo $post['id']; ?>">
                            <button type="submit" class="delete-btn">Delete</button>
                        </form>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

        <div class="footer">
            <p>&copy; 2024 Ashraf Siddiqui | All Rights Reserved</p>
        </div>
    </div>
</body>
</html>
