export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImageUrl: string;
  links: {
    github: string;
  };
};

export interface IPost {
  title: string;
  body: string;
  id: string;
}

export interface PostProps {
  post: IPost;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
