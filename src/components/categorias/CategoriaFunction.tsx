import { useState } from "react";


export const useCategoriaFunctions = (initialCategoria) => {
  const [categoriaList, setCategoriaList] = useState(initialCategoria);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);  
  const [editCategoria, setEditedCategoria] = useState(null);
  const [categoriaToDelete, setProductToDelete] = useState(null);
  const [newCategoria, setNewCategoria] = useState({ name: ""}); 


  const openEditModal = (categoria) => {
    setEditedCategoria(categoria);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedCategoria(null);
  };

  const saveCategoria = () => {
    const updateCategoria = categoriaList.map((categoria) =>
      categoria.id === editCategoria.id ? editCategoria : categoria
    );
    setCategoriaList(updateCategoria);
    closeEditModal();
  };

  const openDeleteModal = (categoria) => {
    setProductToDelete(categoria);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const deleteCategoria = () => {
    const updateCategoria = categoriaList.filter((categoria) => categoria.id !== categoriaToDelete.id);
    setCategoriaList(updateCategoria);
    closeDeleteModal();
  };

  const handleInputChange = (e) => {
    const { name } = e.target; 
    {
      setEditedCategoria((prevCategoria) => ({
        ...prevCategoria,
        [name]: e.target.value,
      }));
    }
  };

  const openAddModal = () => {
    setNewCategoria({ name: ""});
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddCategoria = () => {
    const updateCategoria = [...categoriaList, { ...newCategoria, id: Date.now() }];
    setCategoriaList(updateCategoria);
    closeAddModal();
  };

  const handleNewCategoriaInputChange = (e) => {
    const { name, value } = e.target;
      setNewCategoria((prevCategoria) => ({ ...prevCategoria, [name]: value }));
  };

  return {
    categoriaList,
    isEditModalOpen,
    isDeleteModalOpen,
    isAddModalOpen, 
    editCategoria,
    categoriaToDelete,
    newCategoria, 
    openEditModal,
    closeEditModal,
    saveCategoria,
    openDeleteModal,
    closeDeleteModal,
    deleteCategoria,
    openAddModal, 
    closeAddModal, 
    handleAddCategoria,
    handleInputChange, 
    handleNewCategoriaInputChange, 
  };
};