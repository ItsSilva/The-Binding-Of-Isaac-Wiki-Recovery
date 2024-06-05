// Funcion para registrar un usuario

const USUARIOS_KEY = 'usuarios';
const USUARIOS_ACTIVO_KEY = 'usuario-activo';

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);

    if (!usuarios) {
        return [];
    }

    return JSON.parse(usuarios);
};

// Contrasena
export const registrar = (correo, contrasena, confirmarContrasena) => {
    if (contrasena !== confirmarContrasena){
        throw new Error('Passwords do not match.');
    }

    // Correo
    const usuarios = obtenerUsuarios();

    for (const usuario of usuarios) {
        if (usuario.correo === correo) {
            throw new Error('The email is already registered.');
        }
    }

    // Registrar usuario
    usuarios.push({
        id: new Date().getTime(),
        correo: correo,
        contrasena: contrasena,
        favoritos: []
    });

    // Guardar usuario (actualizar el local storage)
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

export const login = (correo, contrasena) => {
    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.correo === correo && usuario.contrasena === contrasena) {
            localStorage.setItem(USUARIOS_ACTIVO_KEY, usuario.id);
            return usuario;
        }
    }

    throw new Error('Incorrect email and/or password.');
};

export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIOS_ACTIVO_KEY);

    if (!usuarioActivo) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.id === parseInt(usuarioActivo)) {
            return usuario;
        }
    }

    return null;
};

export const logout = () => {
    localStorage.removeItem(USUARIOS_ACTIVO_KEY);
};

export const updateUserInfo = (updatedInfo) => {
    const usuarioActivo = obtenerUsuarioEnSesion();

    if (!usuarioActivo) {
        throw new Error('There is no active user logged in.');
    }

    const usuarios = obtenerUsuarios();
    
    // Verificar si el nuevo correo ya está registrado
    if (updatedInfo.correo) {
        for (const usuario of usuarios) {
            if (usuario.correo === updatedInfo.correo && usuario.id !== usuarioActivo.id) {
                throw new Error('The new email is already registered by another user.');
            }
        }
    }

    const updatedUsuarios = usuarios.map(user => {
        if (user.id === usuarioActivo.id) {
            return { ...user, ...updatedInfo };
        }
        return user;
    });

    localStorage.setItem(USUARIOS_KEY, JSON.stringify(updatedUsuarios));
};
