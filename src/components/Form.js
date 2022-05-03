const Form = ({ handleSubmit, handleChange, input }) => {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        value={input}
        onChange={(event) => handleChange(event)}
        placeholder="New task"
      ></input>
      <input className="buttonSubmit" value="Add task" type="submit"></input>
    </form>
  );
};

export default Form;
