import React from 'react'
import { X } from 'lucide-react'
import { AppContext } from '../..'

export const Order = () => {
    const { products  } = AppContext;
  return (
    <div className="mx-auto my-4 max-w-4xl md:my-6">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}
          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                          src={product.imageSrc}
                          alt={product.imageSrc}
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product.name}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            {product.color}
                          </p>
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-500">x 1</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                      <button
                        type="button"
                        className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sub total</p>
                  <p className="text-sm font-medium">₹1,14,399</p>
                </li>
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium ">Total</p>
                  <p className="text-sm font-bold ">₹1,14,399</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Contact Information</h2>
                  <p className="fontmedium mt-3 text-xs text-gray-700">Order Number: #9876567890</p>
                  <p className="text-xs font-medium text-gray-700">Date: March 03, 2023</p>
                  <button
                    type="button"
                    className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    View Invoice
                  </button>
                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Shipping Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Lem Deluce</p>
                  <p className="text-xs font-medium text-gray-700">1 Ronald Regan Court</p>
                  <p className="text-xs font-medium text-gray-700">102-655-3689</p>
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Payment Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">**** **** **** 6202</p>
                  <p className="text-xs font-medium text-gray-700">Expires 09/25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
