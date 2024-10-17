import db from "../util/db-connect.js";

// export async function createNote(req, res) {
//   try {
//     console.log(req.body); // Log the request body for debugging

//     // Insert the new note into the 'notes' table
//     const newNote = await db("notes").insert(req.body).returning("*"); // Return the inserted note

//     return res.json(newNote); // Send the inserted note as the response
//   } catch (err) {
//     console.log(err); // Log the error for debugging
//     return res
//       .status(500)
//       .json({ msg: "An error occurred while creating the note." });
//   }
// }

export async function createNote(req, res) {
  try {
    console.log(req.body);
    if (!req.body.title) {
      return res.status(400).json({ msg: "Title is required." });
    }
    const newNote = await db("notes").insert(req.body).returning("*");

    return res.status(201).json(newNote);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ msg: "An error occurred while creating the note." });
  }
}

export async function getNotes(_, res) {
  try {
    const notes = await db
      .select()
      .from("notes")
      .timeout(1000, { cancel: true }); // Cancel query if it exceeds 1000ms
    res.json(notes);
  } catch (error) {
    console.error("Error fetching books with cancel:", error);
    res.status(500).json({ error: "Failed to fetch notes with cancel" });
  }
}
export async function toggelDone(req, res) {
  try {
    console.log(req.body.done);
    const updatedNote = await db("notes")
      .first()
      .where({ id: Number(req.params.id) })

      .update({ done: req.body.done })
      .returning("*");
    if (updatedNote.length < 1) {
      return res.status(404).json({ msg: "Note not found" });
    }
    return res.json({ msg: "update successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}

export async function deleteNode(req, res) {
  try {
    const deletedRows = await db("notes")
      .where({ id: Number(req.params.id) })
      .del()
      .returning("*");
    if (deletedRows.length < 1) {
      return res.status(404).json({ msg: "Note not found" });
    }
    return res.json({ msg: "deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}
export async function getIdNote(_, res) {
  try {
    const notes = await db("notes").where({ id: Number(req.params.id) });
    return res.json(notes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}
export async function result(req, res) {
  try {
    // const notes = await db("notes")
    //   .join("users ", "users.id", "notes.user_id")
    //   .select("*")
    //   .where({ user_id: Number(req.params.user_id) });
    const userId = Number(req.params.id);

    const notes = await db("notes")
      .leftJoin("users", "users.id", "notes.user_id")
      .where("users.id", userId)
      .select("*");
    console.log(notes);

    return res.json(notes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}
// app.post("/notes/:id/done", async (req, res) => {
//   return res.json({ msg: "not implemented" });
// });
// bedeutet /notes/1/done  2paramer schicken id und done
//res.send([req.params.id],req.params.done?)
