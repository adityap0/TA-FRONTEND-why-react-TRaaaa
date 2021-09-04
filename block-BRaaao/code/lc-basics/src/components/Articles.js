import data from "../data";
const Article = (props) => {
  return (
    <div className="flex flex-col border border-black p-2 m-10 justify-between w-3/12 items-center">
      <div className="w-full">
        <img src={props.urlToImage} className="h-50 w-full" />
      </div>
      <div className="w-full text-center p-2">{props.title}</div>
    </div>
  );
};

const Articles = () => {
  return (
    <>
      <h1 className="text-center my-5 font-bold uppercase underline text-2xl">
        Articles
      </h1>
      <div className="flex flex-row flex-wrap p-8 justify-between items-center">
        {data.map((item) => {
          return <Article urlToImage={item.urlToImage} title={item.title} />;
        })}
      </div>
    </>
  );
};

export default Articles;
