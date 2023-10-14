import React from 'react'

export default function Result() {
    const object = {
        deltaScore: 69,
        summaries: [
            {
                id: 1,
                title: "bish",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link: "www.paultreanor.com"
            },
            {
                id: 2,
                title: "bash",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link: "www.paultreanor.com"
            },
            {
                id: 3,
                title: "bosh",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link: "www.paultreanor.com"
            },
            
        ]
    }

  return (
    <div className='resultContainer'>
        <div className='deltaScore'>
            {object.deltaScore}
        </div>
        {object.summaries.map((summary) => 
            <div key={summary.id} className='summary'> 
                <h1>{summary.title}</h1>
                <p>{summary.summary}</p>
                <p><a href={summary.link}>{summary.link}</a></p>
            </div>
        )}
    </div>
  )
}
