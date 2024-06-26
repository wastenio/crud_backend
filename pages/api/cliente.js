// Nome: Wastenio da Silva Rocha
//Matricula: 01517377

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;
    console.log("", id);

    if (id === undefined) {
      const usuarios = [{ id: 1, nome: "teste", email: "" }];
      res.status(200).json(usuarios);
    } else {
      res.status(200).json(usuario);
    }
  }

  if (req.method === "POST") {
    const new_usuario = req.body;

    console.log("====================================");
    console.log(new_usuario.nome, new_usuario.email);
    console.log("====================================");

    if (new_usuario.nome === undefined || new_usuario.nome === "") {
      res.status(402).json({ message: "nome é obrigatorio!" });
    }

    if (new_usuario.email === undefined || new_usuario.email === "") {
      res.status(402).json({ message: "email é obrigatorio!" });
    }

    res.status(201).json({});
  }

  if (req.method === "PUT") {
    const update_usuario = req.body;

    if (valid_usuario === undefined) {
      res.status(404).json({});
    }

    
    const runCreat = await updateUsuario.run(
      update_usuario.nome,
      update_usuario.email,
      update_usuario.id
    );

    res.status(200).json({});
  }

  if (req.method === "DELETE") {
    const ID = req.body.id;

    const valid_usuario = await db.get("SELECT * from Usuarios WHERE id = ?", [
      ID,
    ]);
    if (valid_usuario === undefined) {
      res.status(404).json({});
    }

    const deleteUsuario = await db.prepare(
      "DELETE FROM Usuarios WHERE id = ?;"
    );

    const delete_Usuario = await deleteUsuario.run(ID);

    res.status(201).json({});
  }
}
