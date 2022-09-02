export const eventsFetcher = async (page = 1) => {
    const res = await fetch(`http://localhost:3000/api/events?page=${page}`);
    const data = await res.json();
    // const events = {};
  
    // for (const [key, value] of Object.entries(data.events)) {
    //   const { _id, title, description, paid, hosts, photos } = value;
  
    //   events[_id] = {
    //     title,
    //     description,
    //   };
    // }
  
    const paginationData = {
      ...data.pagination
    }

    const events = {
      ...data.events
    }
  
    return [events, paginationData];
  }

