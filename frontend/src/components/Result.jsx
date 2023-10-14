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
    <div className='resultContainer max-w-1/2'>
    <div className='deltaScore font-bold text-lg text-center'>
        <h1>&Delta; {object.deltaScore}</h1>
    </div>
    {object.summaries.map((summary) => 
        <div key={summary.id} className='summary border rounded-lg hover:shadow-md p-4 hover:bg-blue-100'>
            <h1>{summary.title}</h1>
            <p>{summary.summary}</p>
            <p><a href={summary.link} className='text-blue-500'>{summary.link}</a></p>
        </div>
    )}
</div>


  )
}
