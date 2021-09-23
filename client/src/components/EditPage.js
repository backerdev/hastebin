import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Importer from "../api/apiFunctions.js";
const EditPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const history = useHistory();
  console.log(id);

  const getData = async () => {
    const { data } = await Importer.dataget(id);
    console.log(data);
    setItem(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = await Importer.dataPost(newItem);
    // console.log(id.data);
    // console.log("handle submit: " + id.data);
    history.push(`/share/${id.data}`);

    setNewItem(``);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <pre>
        <code>
          <textarea
            onChange={(e) => {
              setNewItem(e.target.valve);
            }}
          >
            {item}
          </textarea>
        </code>
      </pre>
    </div>
  );
};

export default EditPage;
