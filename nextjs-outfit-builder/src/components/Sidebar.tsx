// Sidebar.tsx
import Image from 'next/image';

const clothingItems = [
  { id: 'hat', name: 'Hat', icon: '/icons/hat.png' },
  { id: 'shirt', name: 'Shirt', icon: '/icons/shirt.png' },
  { id: 'pants', name: 'Pants', icon: '/icons/pants.png' },
];

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Clothing Items</h2>
      <div className="space-y-4">
        {clothingItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('item', JSON.stringify(item));
            }}
            className="cursor-move border p-2 rounded hover:bg-gray-200"
          >
            <Image src={item.icon} alt={item.name} width={50} height={50} />
            <p className="text-sm text-center mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
