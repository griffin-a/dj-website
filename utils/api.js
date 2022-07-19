export const eventsFetcher = async (page = 1) => {
    const res = await fetch(`http://localhost:3000/api/events?page=${page}`);
    const data = await res.json();
    console.log(page);
    const container = {};
  
    for (const [key, value] of Object.entries(data.events)) {
      const { _id, title, description, paid, hosts, photos } = value;
  
      container[_id] = {
        title,
        description,
      };
    }
  
    const paginationData = {
      ...data.pagination
    }
  
    return [container, paginationData];
  }

