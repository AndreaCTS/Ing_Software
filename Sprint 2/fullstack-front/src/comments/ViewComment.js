import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import "../styles/style.css";

export default function ViewComment() {
  const [comments, setComments] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0); // Default rating value
  const [filterRating,setFilterRating] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/comments/all`);
      setComments(result.data);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleAddRating = async (commentId) => {
    try {
      // Send the rating data (a number) directly in the request body
      const response = await axios.post(
        `http://localhost:8080/comments/${commentId}/rate`,
        selectedRating, // Send the selectedRating directly as the request body
        {
          headers: {
            'Content-Type': 'application/json', // Set the content type header
          },
        }
      );
  
      // Update the UI with the new rating data
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, averageRating: response.data.averageRating } // Update averageRating field
            : comment
        )
      );
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };
  
  const handleFilterChange = (event) => {
    setFilterRating(event.target.value);
  };

  return (
    <div className="full-page-bg">
    <div className="container" >
      <div className="py-4">
        <Link className="btn btn-primary" to="/addcomments">
          Add Comment
        </Link>
        <div className="my-2">
            <label>Filter by Rating:</label>
            <select value={filterRating} onChange={handleFilterChange}>
              <option value={0}>All Ratings</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        <Row>
          {comments
          .filter(comment => filterRating === 0 || comment.averageRating === filterRating)
          .map((comment, index) => (
            <Col key={comment.id} md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Comment {index + 1}</Card.Title>
                  <Card.Text style={{textAlign:"justify"}}>{comment.text}</Card.Text>
                  <Card.Text>Rating: {comment.averageRating}</Card.Text>
                  <select value={selectedRating} onChange={handleRatingChange}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                  <Button
                    onClick={() => handleAddRating(comment.id)}
                    variant="outline-primary"
                    className="mt-2"
                  >
                    Rate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    </div>
  );
}