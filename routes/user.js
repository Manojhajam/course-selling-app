
export const UserRoutes = (app) => {
    app.post("/user/signup", (req, res) => {
      res.json({ message: "Signup endpoint" });
    });
    app.post("/user/signin", (req, res) => {
      res.json({ message: "Signup endpoint" });
    });

    app.get("/user/purchases", (req, res) => {
      res.json({ message: "Signup endpoint" });
    });
}       