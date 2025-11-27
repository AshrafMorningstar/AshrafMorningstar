package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "sync"
    "time"
)

// Author: Ashraf Siddiqui
// GitHub: https://github.com/AshrafMorningstar

type Message struct {
    ID        int       `json:"id"`
    Content   string    `json:"content"`
    Author    string    `json:"author"`
    CreatedAt time.Time `json:"created_at"`
}

type Server struct {
    messages []Message
    mu       sync.RWMutex
    nextID   int
}

func NewServer() *Server {
    return &Server{
        messages: make([]Message, 0),
        nextID:   1,
    }
}

func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {
    response := map[string]interface{}{
        "message": "Go Microservice",
        "author":  "Ashraf Siddiqui",
        "github":  "https://github.com/AshrafMorningstar",
        "endpoints": []string{"/messages", "/health"},
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func (s *Server) handleMessages(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    switch r.Method {
    case http.MethodGet:
        s.mu.RLock()
        json.NewEncoder(w).Encode(s.messages)
        s.mu.RUnlock()

    case http.MethodPost:
        var msg Message
        if err := json.NewDecoder(r.Body).Decode(&msg); err != nil {
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }

        s.mu.Lock()
        msg.ID = s.nextID
        msg.CreatedAt = time.Now()
        s.nextID++
        s.messages = append(s.messages, msg)
        s.mu.Unlock()

        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(msg)

    default:
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
    }
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{
        "status": "healthy",
        "time":   time.Now().Format(time.RFC3339),
    })
}

func main() {
    server := NewServer()

    http.HandleFunc("/", server.handleHome)
    http.HandleFunc("/messages", server.handleMessages)
    http.HandleFunc("/health", server.handleHealth)

    fmt.Println("Starting Go Microservice")
    fmt.Println("Author: Ashraf Siddiqui")
    fmt.Println("GitHub: https://github.com/AshrafMorningstar")
    fmt.Println("Server running on :8080")

    log.Fatal(http.ListenAndServe(":8080", nil))
}
