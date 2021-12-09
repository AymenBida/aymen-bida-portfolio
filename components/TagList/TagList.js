import Tag from "./Tag/Tag";

const TagList = ({ contents }) => {
  return (
    <ul>
      {contents.map((item) => (
        <Tag key={item} text={item} />
      ))}
    </ul>
  );
};

export default TagList;
