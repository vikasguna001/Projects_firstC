import React, { useState, useEffect } from 'react';

function Pagination({ show, onPagination, total }) {
    const [counter, setCounter] = useState(1);
    const [number, setNumber] = useState(Math.ceil(total/show))
    useEffect(() => {
        const value = show * counter;
        // console.log("start = ",value - show)
        // console.log("end = ",value)
        onPagination(value - show, value)
    }, [counter])
    const onButtonClick = (type) => {
        if (type === 'prev') {
            if (counter === 1) {
                setCounter(1)
            }
            else {
                setCounter(counter - 1);
            }
        } else if (type === 'next') {
            if (number === counter) {
                setCounter(counter);
            }
            else {
                setCounter(counter + 1);
            }
        }
    }
    return (
        <>
            {/* <style>{`
        .pagination{
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            gap:5px;
            background-color:#1a5089;
            color: #fff;
            padding: 6px 12px;
            cursor: pointer;
            border:none;
            border-radius: 3px;
            font-weight: 400;
          }
          .pagination:hover{
            background-color: #0069d9;
            color: #fff;
          }
          
    `}</style> */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true" onClick={() => onButtonClick('prev')}>
                            Previous
                        </a>
                    </li>

                    {new Array(number).fill("").map((el, index) => (
                        <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
                            <a className="page-link" href="#" onClick={() => setCounter(index+1)}>
                                {index + 1}
                            </a>
                        </li>
                    ))
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => onButtonClick('next')}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

            {/* <div className='d-flex justify-content-between'>
                <button className='pagination' onClick={() => onButtonClick('prev')}>Pervious</button>
                <button className='pagination' onClick={() => onButtonClick('next')}>Next</button>
            </div> */}
        </>
    );
}

export default Pagination;
