import Hero from "@/components/modules/home/hero/Hero";
import Content from "@/components/modules/home/content/Content";
import UsersFetch from "@/components/common/UsersFetch";
import { GetStaticProps } from "next";
import { User } from "@/lib/interfaces";
import { loadUsers } from "@/lib/load-users";
import CtaForm from "@/components/shared/CtaForm";
import ZabiegiPage from "../zabiegyPage/ZabiegiPage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Content />
      <UsersFetch />
      <ZabiegiPage />
      <CtaForm />
    </>
  );
};

export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
  // Call an external API endpoint to get users.
  // You can use any data fetching library
  const users: User[] = await loadUsers();

  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    },
  };
};

export default HomePage;
