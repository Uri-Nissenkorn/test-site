
const docs = [
    {
      id: 1,
      title: "Document 1",
      description: "This is the first document",
    },
    {
      id: 2,
      title: "Document 2",
      description: "This is the",
    },
]
  
export default function handler(req, res) {
    res.status(200).json(docs);
  }
  