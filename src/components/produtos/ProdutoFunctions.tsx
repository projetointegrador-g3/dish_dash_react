import { useState } from "react";

export const useProdutoFunctions = (initialProducts) => {
  const [productList, setProductList] = useState(initialProducts);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);  
  const [editedProduct, setEditedProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", image: "" }); 

  const formatPrice = (value) => {
    const parsedValue = parseFloat(value).toFixed(2);  
    return `R$${parsedValue.replace('.', ',')}`;
  };

  const openEditModal = (product) => {
    setEditedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedProduct(null);
  };

  const saveProduct = () => {
    const updatedProducts = productList.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProductList(updatedProducts);
    closeEditModal();
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const deleteProduct = () => {
    const updatedProducts = productList.filter((product) => product.id !== productToDelete.id);
    setProductList(updatedProducts);
    closeDeleteModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: formatPrice(value),
      }));
    } else {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const openAddModal = () => {
    setNewProduct({ name: "", price: "", category: "", image: "" });
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddProduct = () => {
    const updatedProducts = [...productList, { ...newProduct, id: Date.now() }];
    setProductList(updatedProducts);
    closeAddModal();
  };

  const handleNewProductInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      setNewProduct((prevProduct) => ({ ...prevProduct, [name]: formatPrice(value) }));
    } else {
      setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  return {
    productList,
    isEditModalOpen,
    isDeleteModalOpen,
    isAddModalOpen, 
    editedProduct,
    productToDelete,
    newProduct, 
    openEditModal,
    closeEditModal,
    saveProduct,
    openDeleteModal,
    closeDeleteModal,
    deleteProduct,
    openAddModal, 
    closeAddModal, 
    handleInputChange,
    handleAddProduct, 
    handleNewProductInputChange, 
  };
};
