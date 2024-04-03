export const Badge = ({ totalProducts }) => {
  return (
    <span className="absolute -top-3 -right-3 bg-blue-400 text-white flex justify-center items-center w-6 h-6 rounded-full">
      {totalProducts?.length || ""}
    </span>
  )
}
