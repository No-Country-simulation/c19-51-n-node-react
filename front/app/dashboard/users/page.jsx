"use client";
import Search from "../../components/dashboard/search/search";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../components/dashboard/pagination/Pagination";

const UsersPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPorPagina] = useState(5);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  //Usuarios de la Base de Datos
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const respuesta = await axios.get("http://localhost:8000/api/users");
        setUsuarios(respuesta.data);
        setUsuariosFiltrados(respuesta.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    fetchUsuarios();
  }, []);

  //funcion search
  useEffect(() => {
    if (terminoBusqueda) {
      const filtrados = usuarios.filter(
        (usuario) =>
          usuario.firstName.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          usuario.lastName.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          usuario.email.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setUsuariosFiltrados(filtrados);
    } else {
      setUsuariosFiltrados(usuarios);
    }
  }, [terminoBusqueda, usuarios]);

  const handleBusqueda = (query) => {
    setTerminoBusqueda(query);
    setPaginaActual(1);
  };

  const handleCambioPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const indiceUltimoItem = paginaActual * itemsPorPagina;
  const indicePrimerItem = indiceUltimoItem - itemsPorPagina;
  const itemsActuales = usuariosFiltrados.slice(indicePrimerItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(usuariosFiltrados.length / itemsPorPagina);

  return (
    <div className={styles.containerMain}>
      <div className={styles.top}>
        <Search placeholder="Buscar un usuario..." onSearch={handleBusqueda} />
        <Link href="/dashboard/users/adduser">
          <button className={styles.addButon}>Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.cat}>
            <td>Full Name</td>
            <td>E-Mail</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Action</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {itemsActuales.map((usuario) => (
            <tr key={usuario._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={usuario?.photo || "/noavatar.png"}
                    alt="Imagen de Usuario"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {usuario.firstName} {usuario.lastName}
                </div>
              </td>
              <td>{usuario.email}</td>
              <td>{usuario.address}</td>
              <td>{usuario.phone}</td>
              <td>{formatDate(usuario.registerDate)}</td>
              <td>{usuario.role}</td>
              <td>
                <div>
                  <Link href={`/dashboard/users/${usuario._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <span className={`${styles[usuario.status.toLowerCase()]} ${styles.status}`}>
                  {usuario.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={paginaActual}
        totalPages={totalPaginas}
        onPageChange={handleCambioPagina}
      />
    </div>
  );
};

export default UsersPage;
