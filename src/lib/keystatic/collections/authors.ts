import { collection, fields } from "@keystatic/core";

export const authors = collection({
  label: "Blog authors",
  path: "src/content/authors/*/",
  slugField: "name",
  columns: ["name", "bio"],
  schema: {
    name: fields.slug({
      name: {
        label: "Name",
        description: "The name of the author",
      },
    }),
    bio: fields.text({
      label: "Bio",
      multiline: true,
      description: "A short bio of the author",
    }),
    avatar: fields.image({
      label: "Avatar Image",
      directory: "src/assets/images/authors",
      publicPath: "/src/assets/images/authors/",
    }),
  },
});
