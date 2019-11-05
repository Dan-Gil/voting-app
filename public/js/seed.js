window.Seed = (function() {
  function generateVoteCount() {
    return Math.floor(Math.random() * 230 + 15);
  }

  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/daniel.jpg",
      productImageUrl: "images/products/image-aqua.png"
    },
    {
      id: 2,
      title: "Supermajority: The Fantasy Congress League",
      description: "Earn points when your favorite politicians pass legislation.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/kristy.png",
      productImageUrl: "images/products/image-rose.png"
    },
    {
      id: 3,
      title: "Tinfoild: Tailored tinfoil hats",
      description: "We already have your measurements and shipping address.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/veronika.jpg",
      productImageUrl: "images/products/image-steel.png"
    },
    {
      id: 4,
      title: "Haught or Naught",
      description: "High-minded or absent-minded? You decide.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/molly.png",
      productImageUrl: "images/products/image-yellow.png"
    },
    {
      id: 5,
      title: "Testing",
      description: "lore ipsum.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/elliot.jpg",
      productImageUrl: "images/products/image-yellow.png"
    },
    {
      id: 6,
      title: "Mr. Smartypants",
      description: "Google is my best friend",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/elyse.png",
      productImageUrl: "images/products/image-rose.png"
    },
    {
      id: 7,
      title: "Roses are Red",
      description: "Violets are blue",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/helen.jpg",
      productImageUrl: "images/products/image-yellow.png"
    },
    {
      id: 8,
      title: "Believe or not",
      description: "Noboday care",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/jenny.jpg",
      productImageUrl: "images/products/image-aqua.png"
    },
    {
      id: 11,
      title: "Think for yourself",
      description: "Question Authority",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/justen.jpg",
      productImageUrl: "images/products/image-yellow.png"
    },
    {
      id: 9,
      title: "Pull the trigger",
      description: "I dont give a $%&!",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/matthew.png",
      productImageUrl: "images/products/image-rose.png"
    },
    {
      id: 12,
      title: "Friend or Foe",
      description: "Trust no one",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/steve.jpg",
      productImageUrl: "images/products/image-steel.png"
    },
    {
      id: 10,
      title: "True or False",
      description: "Everting its a lucky strike",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/stevie.jpg",
      productImageUrl: "images/products/image-aqua.png"
    }
  ];

  return {products: products};
})();
