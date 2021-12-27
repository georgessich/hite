const itemCards = [
    {
      id: 1,
      title: "Chet Armchair",
      image: "https://i.imgur.com/kyWrBW2.png",
      price: "$506",
      materials: ["Wool"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 5,
      category: "1",
      slug: "chet-armchair"
    },
    {
      id: 2,
      title: "Russ Chair",
      image: "https://i.imgur.com/DNv3YiH.png",
      price: "$129",
      materials: ["Wood"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.5,
      category: "1",
      slug:"russ-chair"
    },
    {
      id: 3,
      title: "Johnnie Chair",
      image: "https://i.imgur.com/wIvxjBj.png",
      price: "$152",
      materials: ["Wood", "Plastic"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.7,
      category: "1",
      slug:"johnnie-chair"
    },
    {
      id: 4,
      title: "June Chair",
      image: "https://i.imgur.com/mY3CUgv.png",
      price: "$315",
      materials: ["Plastic", "Plywood"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.8,
      category: "1",
      slug:"june-chair"
    },
    {
      id: 5,
      title: "Alexandre Chair",
      image: "https://i.imgur.com/kq83XkV.png",
      price: "$948",
      materials: ["Plastic", "Plywood"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.4,
      category: "1",
      slug:"alexandre-chair"
    },
    {
      id: 6,
      title: "Zaria Sofa",
      image: "https://i.imgur.com/yZwqd4f.png",
      price: "$489",
      materials: ["Wool", "Plywood"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.6,
      category: "2",
      slug:"zaria-sofa"
    },
    {
      id: 7,
      title: "Emmett Lamp",
      image: "https://i.imgur.com/xxagiBZ.png",
      price: "$194",
      materials: ["Metal"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.9,
      category: "3",
      slug:"emmett-lamp"
    },
    {
      id: 8,
      title: "Aurore Chair",
      image: "https://i.imgur.com/xkb0Y9d.png",
      price: "$275",
      materials: ["Plastic", "Wood"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.7,
      category: "1",
      slug:"aurore-chair"
    },
    {
      id: 9,
      title: "Ashlynn Sofa",
      image: "https://i.imgur.com/6eN5cO7.png",
      price: "$899",
      materials: ["Wool", "Wood"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 5.0,
      category: "2",
      slug:"ashlynn-sofa"
    },
    {
      id: 10,
      title: "Madonna Lamp",
      image: "https://i.imgur.com/IBCztYa.png",
      price: "$537",
      materials: ["Metal"],
      description: [
        "Vestibulum tincidunt commodo tortor, non molestie metus tempor nec. Ut a odio sagittis, tempor arcu dapibus, lobortis magna. Maecenas fermentum metus felis, at condimentum lorem porttitor euismod. Nulla volutpat tristique quam sed iaculis. Etiam consequat urna id sagittis gravida. Fusce a accumsan metus. Praesent semper, libero pretium sollicitudin rhoncus, odio turpis maximus ligula, id rhoncus ex nulla eu massa. Integer justo eros, elementum vitae quam vel, dictum vulputate augue. Donec tempus id purus vitae blandit. Pellentesque eleifend, libero non dignissim scelerisque, diam elit aliquet quam, ac interdum ante augue et sapien.",
        "Sed eu justo nibh. Ut molestie, risus sed pretium scelerisque, ipsum lacus lacinia metus, nec eleifend felis massa sodales nisl. Duis sit amet vestibulum lacus. Suspendisse ac magna sit amet magna vehicula cursus et id augue. Nullam sit amet metus at nunc suscipit tempus a ac libero. Maecenas nec vehicula mi. Suspendisse potenti.",
        "Aliquam felis ante, facilisis a rhoncus quis, vulputate sed nunc. In ac lacus et nibh pulvinar vestibulum et sit amet urna. Praesent libero lorem, fringilla cursus lacus eu, volutpat tempor mi. Maecenas sagittis mauris sem, in egestas lectus placerat at. Aliquam hendrerit neque nec venenatis consectetur. Suspendisse commodo dolor nibh, a ultricies lorem malesuada non. Cras vel magna elementum, dapibus ante ac, dignissim massa. Etiam ultrices sagittis efficitur. Cras varius placerat nunc id dictum. Curabitur eget massa felis.",
      ],
      rating: 4.8,
      category: "3",
      slug:"madonna-lamp"
    },
  ];
  
  const categories = [
    {
      id: "1",
      category: "Chairs",
      slug: "chairs",
    },
    {
      id: "2",
      category: "Sofas",
      slug: "sofas",
    },
    {
      id: "3",
      category: "Lights",
      slug: "lights",
    },
  ];

  module.exports = {
    itemCards,
    categories
  }