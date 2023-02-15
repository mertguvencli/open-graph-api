import Head from 'next/head'
// import LoadingDots from '@/components/loading-dots'
// import { useState } from 'react'

export default function Home() {
  // const [disabled, setDisabled] = useState(true)
  // const [adding, setAdding] = useState(false)
  // const [error, setError] = useState(null)
  const apiUrl = "https://mertguvencli.github.io/open-graph-api/api/extract?url="

  return (
    <>
      <Head>
        <title>Open Graph Extraction API </title>
        <meta name="description" content="Open Grap Extraction API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center my-20'>
          <h1 className='text-4xl sm:text-6xl font-bold'>Open Graph Extraction API</h1>

          <div className='mt-20'>
            <pre className='bg-gray-100 font-mono text-xs p-2 rounded-lg shadow flex items-center justify-between gap-2 sm:gap-5'>
              <span className='text-lg sm:text-2xl font-black'>GET</span>
              <span>{apiUrl}<span className='font-bold sm:text-lg'>{"your_url"}</span></span>
            </pre>
          </div>


          {/* <form className="flex justify-between space-x-4 px-5 w-full max-w-2xl h-10 mt-10">
            <input
              type="text"
              name="domain"
              // onInput={(e) => {
              //   setDomain(e.target.value)
              // }}
              autoComplete="off"
              placeholder="mydomain.com"
              pattern="^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$"
              required
              className="rounded-md border border-gray-300 focus:ring-0 focus:border-black px-4 flex-auto min-w-0 sm:text-sm"
            />
            <button
              type="submit"
              // disabled={disabled}
              className={`${disabled
                  ? 'cursor-not-allowed bg-gray-100 text-gray-500 border-gray-300'
                  : 'bg-black text-white border-black hover:text-black hover:bg-white'
                } py-2 w-28 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
            >
              {adding ? <LoadingDots /> : 'Add'}
            </button>
          </form> */}

        </main>
      </div>
    </>
  )
}
