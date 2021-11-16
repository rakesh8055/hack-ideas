const EVENTS = [
    {
      id: 1,
      title: "Title-1",
      text: "Description 1",
      tags: ["feature", "tech"],
      creationDate: "2021-01-01",
      likes: 5
    },
    {
      id: 2,
      title: "Title-2",
      text: "Description 2",
      tags: ["feature"],
      creationDate: "2021-10-01",
      likes: 2
    },
    {
      id: 3,
      title: "Title-3",
      text: "Description 3",
      tags: ["tech"],
      creationDate: "2021-09-01",
      likes: 3
    },
    {
      id: 4,
      title: "Title-4",
      text: "Description 4",
      tags: ["design"],
      creationDate: "2021-11-01",
      likes: 1
    },
    {
      id: 5,
      title: "Title-5",
      text: "Description 5",
      tags: ["tech"],
      creationDate: "2021-06-20",
      likes: 3
    },
    {
      id: 6,
      title: "Title-6",
      text: "Description 6",
      tags: ["design"],
      creationDate: "2021-08-12",
      likes: 6
    }
  ];

  export const sortByOptions = [
    {
        id: 1,
        name: 'Highest likes',
        sortType: 'desc',
        sortBy: 'likes'
    },
    {
        id: 2,
        name: 'Lowest likes',
        sortType: 'asc',
        sortBy: 'likes'
    },
    {
        id: 3,
        name: 'Newest',
        sortType: 'desc',
        sortBy: 'creationDate'
    },
    {
        id: 4,
        name: 'Oldest',
        sortType: 'asc',
        sortBy: 'creationDate'
    }
]

export const DEFAULT_TAGS = [
  {
    value: 0,
    label: 'feature'
  },
  {
    value: 1,
    label: 'tech'
  },
  {
    value: 2,
    label: 'blockchain'
  },
  {
    value: 3,
    label: 'design'
  },
  {
    value: 4,
    label: 'ai/ml'
  }
]
  
  export default EVENTS;
  