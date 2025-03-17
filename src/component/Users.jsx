import React, { useState, useEffect, useCallback } from "react";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "@/components/ui/Card";
import { Search } from "lucide-react";

export default function UserSearch() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Implement debounced search
  const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Create a HashMap for efficient searching
  const createUserMap = useCallback((users) => {
    const map = new Map();

    users.forEach((user) => {
      const name = user.name.toLowerCase();

      for (let i = 1; i <= name.length; i++) {
        const prefix = name.substring(0, i);
        if (!map.has(prefix)) {
          map.set(prefix, []);
        }
        map.get(prefix).push(user);
      }
    });

    return map;
  }, []);

  // Search function using the HashMap
  const searchUsers = useCallback(
    (term, users) => {
      if (!term.trim()) {
        return users;
      }

      const userMap = createUserMap(users);
      const searchTerm = term.toLowerCase();
      return userMap.get(searchTerm) || [];
    },
    [createUserMap]
  );

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((term) => {
      const results = searchUsers(term, users);
      setFilteredUsers(results);
    }, 300),
    [users, searchUsers]
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Users
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
              Search through our user database to find the right connections.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-8">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search users by name..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-4">{error}</div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <Card key={user.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="space-y-1">
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          @{user.username}
                        </p>
                        <p className="text-sm font-medium">
                          Company: {user.company.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-8 text-muted-foreground">
                  No users found matching "{searchTerm}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
