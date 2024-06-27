import Airtable from 'airtable'

const token =
  'patriREkQ3HCJxKvY.f7aa3a52ce62d2b0d406f6092755d36c5a79b01a636e7473d45dcfb69cc1fe8e'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('app6JZx3xMLq29n1Z')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Articles')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            title: decodeHTMLEntities(record.fields['Title']),
            description: decodeHTMLEntities(record.fields['Description']),
            url: record.fields['Url']
          })
        })

        resolve(content)
      })
      .catch((error) => reject(error))
  })
}

export { getPostTeasers }

function decodeHTMLEntities(text) {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}
