import { useEffect } from "react"
import { useProductStore } from "../store"

export const Products = () => {

	const { products, loading, error, fetchProducts } = useProductStore()

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts])

	if (loading) return <h2 className="text-center mt-30 font-semibold">Loading products information!</h2>
	if (error) return <h2 className="text-center mt-30 font-semibold">An error has occured: {error}</h2>

	return (
		<main className="max-w-4xl mx-auto pt-10 pb-6 px-6">
			
			{ !products.data ? 
				(<p>There is not products!</p>) 
				: 
				(
					<div className="grid grid-cols-3 gap-6">
						{
							products.data.map(product => (
								<div key={product._id} className="p-4 rounded-xl">
									<img className="object-cover block mb-2 w-full rounded-xl h-80" src={product.imageUrl} alt={product.name} />
									<p className="font-semibold">{product.name}</p>
									<p>${product.price}</p>
								</div>
							))		
						}			
					</div>
				)}
			
		</main>
	)
}