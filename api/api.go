package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type Book struct {
	gorm.Model
	Name string
}

func main() {

	db, _ := gorm.Open("sqlite3", "books.db")
	defer db.Close()
	db.AutoMigrate(&Book{})

	r := gin.Default()
	r.GET("/books", func(c *gin.Context) {
		var books []Book
		db.Find(&books)
		c.JSON(200, books)
	})

	r.POST("/books", func(c *gin.Context) {
		var book Book
		c.BindJSON(&book)
		db.Create(&book)
		c.JSON(200, book)
	})

	r.Run()
}
