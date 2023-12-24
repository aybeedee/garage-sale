import { notFound } from 'next/navigation';
import { sampleProductsList } from '@/utils/constants';

export default async function ProductPage(
  {
    params,
  }:
    {
      params: { handle: string; };
    }
) {

  const product = sampleProductsList.find((product) => (product.handle === params.handle));

  if (!product) {

    return notFound();
  }



  return (
    <div className="flex-1 w-full flex flex-col items-center mb-12">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">
        {params.handle}
        <br/>
        {product.name}
      </h2>
      <p>{product.description}</p>
    </div>
  )
}
