import React, {useState, useEffect} from "react";

function List( {list, dataURL, sendData} ) {


    const [id, setId] = useState();
    const [status, setStatus] = useState({
        loading: false,
        error: undefined
    })

    useEffect(() => {
        const update = async () => {
            setStatus({loading:true});
            console.log('Выполняется загрузка данных');
            try {
                const response = await fetch(`${dataURL}${id}.json`, {method: 'GET'});
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                sendData(data);

            } catch (e) {
                console.log(e);
            }

        };

        update()

    }, [id]);

    const onClick = id => {
        setId(id)
        // console.log(id);
    }

    return (
        <div className="list">
             {list.map((item) => {
                return (
                    <input
                        className={"list-item"}
                        type={"button"}
                        onClick={() => onClick(item.id)}
                        value={item.name}
                    />
                )
            })
        }
        </div>
    );
}

export default List;