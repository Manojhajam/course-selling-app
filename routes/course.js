


export const courseRoutes = (
    app) => {
    app.post("/course/purchases", (req, res) => {
      res.json({ message: "Signup endpoint" });
    });
}