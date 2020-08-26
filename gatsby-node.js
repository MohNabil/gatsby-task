exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const articles = [
    {
      title: "First Article",
      details: "Great Article",
      image: "../images/article1.jpg",
    },
    {
      title: "Second Article",
      details: "Great Article",
      image: "../images/article3.jpg",
    },
  ]

  articles.forEach(article => {
    const node = {
      title: article.title,
      details: article.details,
      image: article.image,
      id: createNodeId(`Article-${article.title}`),
      internal: {
        type: "Article",
        contentDigest: createContentDigest(article),
      },
    }
    actions.createNode(node)
  })
}
