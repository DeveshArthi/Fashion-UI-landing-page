const clientlist = [
    {
        id:1,
        comment:'My skin has never felt this alive. The Velvet Serum is unlike anything Ive ever used —it disappears into skin like silk.',
        name: 'Margaux L.',
        country: 'paris',
    },
    {
        id:2,
        comment:'"Three weeks in and Ive already had four people ask if Ive had work done. I havent  I just found Aurore.',
        name: 'Margaux L.',
        country: 'paris',
    },
    {
        id:3,
        comment:'The Rose Concentrate is worth every penny. My skin texture has transformed completely. A true luxury that delivers.',
        name: 'Margaux L.',
        country: 'paris',
    },
]


const Clients = () => {
  return (
     <div className="clients_wrapper">
            <div className="container">
                <span>Words from our clients</span>
                <h2>
                   Transformations.
                </h2>
                <div className="clients_box">
                    {clientlist.map((product, index) =>

                        <div className="clients_list" key={`${product.id}-${index}`}>
                            <p>{product.comment}</p>
                            <div className="client_details">
                            <h3>{product.name}</h3>
                            <span>{product.country}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Clients