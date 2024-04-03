export const Badge = ({ totalProducts }) => {
  return (
    <span className="absolute -top-1 -right-3 bg-blue-400 text-white flex justify-center items-center w-4 h-4 rounded-full">
      {totalProducts?.length || ""}
    </span>
  )
}
