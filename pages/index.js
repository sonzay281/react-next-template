import APIServices from "api/APIServices";

const Index = (_) => {
  return <h1>This is just a template!</h1>;
};

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 5,
  };
};

export default Index;
