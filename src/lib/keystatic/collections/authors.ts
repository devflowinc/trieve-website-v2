import { collection, fields } from "@keystatic/core";

export const authors = collection({
  label: "Blog authors",
  path: "src/content/authors/*/",
  slugField: "name",
  columns: ["name", "bio", "github", "x"],
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
    github: fields.text({
      label: "GitHub username",
      description: "The author's GitHub username",
    }),
    x: fields.text({
      label: "X username",
      description: "The author's X username",
    }),
    avatar: fields.image({
      label: "Avatar Image",
      directory: "src/content/authors",
      publicPath: "/src/content/authors/",
    }),
  },
});
