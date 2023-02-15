// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import * as cheerio from 'cheerio'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { url } = req.query

  if (req.method === "GET") {
    const options = {
      headers: {
        // Generate fake ua
        "User-Agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.${Math.floor(Math.random() * 10000)} Safari/537.${Math.floor(Math.random() * 100)}`
      }
    }

    const checkMetaTags: any = async (url: string) => {
      const results = await axios.get(url, options)
        .then((response) => {
          if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            const og: any = {}
            $('meta').each((i, el) => {
              if (el.attribs.property && el.attribs.property.includes('og:')) {
                const key = el.attribs.property.replace('og:', '');
                og[key] = el.attribs.content;
              }
            })

            return og
          }
        })
        .catch((error) => {
          console.log(error)
        });

      return results
    }

    const results = await checkMetaTags(url)

    if (Object.keys(results).length > 0) {
      res.status(200).json(results)
    } else {
      res.status(400).json({ message: "URL does not support open graph properties!" })
    }
  }
  
  res.status(405).json({ message: "Method not allowed!" })
}
