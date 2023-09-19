import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewComment() {


    const [comments, setComments] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadComments();
    }, []);

    const loadComments = async () => {
        const result = await axios.get("http://localhost:8080/comments/all");
        setComments(result.data);
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment, index) => (
                            <tr>
                                <th scope="row" key={index}>
                                    {index + 1}
                                </th>
                                <td>{comment.text}</td>
                                <td>
                                    {comment.rating}
                                </td>
                                <td>
                                <button type="submit" className="btn btn-outline-primary">
                                     add rating
                                   </button>
                                </td>
                            </tr>
                        ))}
                        <Link className="btn btn-outline-primary" to="/">
                         Add comment
                        </Link>
                    </tbody>
                </table>
            </div>
        </div>
    );
}