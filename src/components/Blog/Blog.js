import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const Blog = () => {
    const questions = useLoaderData();

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    return (
        <div>
            {
                questions.map(ques => <div>

                    <div className="row">
                        <div className=" col-lg-6 col-sm-12 mx-auto">
                            <button onClick={onButtonClick}>
                                Download PDF
                            </button>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{ques.question}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        {ques.answer}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blog;