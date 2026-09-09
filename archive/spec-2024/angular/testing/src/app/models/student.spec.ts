import { Student } from "./student"

describe("Student model", () => {
  it("should create with empty defaults", () => {
    const s = new Student()
    expect(s.id.length).toBeGreaterThan(0)
    expect(s.name).toBe("")
    expect(s.email).toBe("")
  })

  it("should create with provided values", () => {
    const s = new Student("1", "Alice", "alice@example.com")
    expect(s.id).toBe("1")
    expect(s.name).toBe("Alice")
    expect(s.email).toBe("alice@example.com")
  })

  it("should allow updating properties after construction", () => {
    const s = new Student()
    s.id = "42"
    s.name = "Bob"
    s.email = "bob@example.com"
    expect(s).toEqual(jasmine.objectContaining({
      id: "42",
      name: "Bob",
      email: "bob@example.com"
    }))
  })

  it("should support partial constructor args (others default to empty)", () => {
    const s = new Student("xyz") // name és email marad alapértelmezett ""
    expect(s.id).toBe("xyz")
    expect(s.name).toBe("")
    expect(s.email).toBe("")
  })

  it("should generate a random id if none is provided", () => {
    const s = new Student()
    expect(s.id).toBeTruthy() // ne legyen üres
    expect(s.id.length).toBeGreaterThan(0)
  })

  it("should generate different ids for different instances (most of the time)", () => {
    const s1 = new Student()
    const s2 = new Student()
    expect(s1.id).not.toBe(s2.id) // kis esély a véletlen egyezésre, de teszt célra jó
  })

  it("should keep provided id instead of generating one", () => {
    const s = new Student("custom123")
    expect(s.id).toBe("custom123")
  })
})
