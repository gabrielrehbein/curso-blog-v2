import { postRepository } from "@/repositories/post";
import { cache } from "react";


export const findAllPublicPostsCached = cache(async () => {
    return postRepository.findAllPublic();
});

export const findPostBySlugCached = cache(async (slug: string) => {
  return postRepository.findBySlug(slug);
});

export const findPostByIdCached = cache(async (id: string) => {
  return postRepository.findById(id);
});
