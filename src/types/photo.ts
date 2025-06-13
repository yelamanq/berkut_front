export type Photo = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  links: {
    download: string;
  };
  user: {
    username: string;
    name: string;
    profile_image: {
      small: string;
    };
  };
};
