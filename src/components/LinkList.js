import React from "react";
import Link from "./Links";
import { useQuery, gql } from "@apollo/client";
const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
const LinkList = () => {
  const { data, loading } = useQuery(FEED_QUERY);

  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
