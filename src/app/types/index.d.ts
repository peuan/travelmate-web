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
