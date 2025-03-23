export const prerender = true;

export async function load({ params }) {
  const availableSlugs = ['morning', 'evening', 'after-prayer']; // Define available pages
  if (!availableSlugs.includes(params.slug)) {
    return { status: 404 };
  }
  return { props: { slug: params.slug } };
}
