import net from "node:net";
import pg from "pg";

const createIpv4Socket = () => {
  const socket = new net.Socket();
  const connect = socket.connect.bind(socket);

  // pg uses the positional socket.connect(port, host) form. In this Windows/Node
  // environment that path times out for Neon's dual-stack host even though an
  // explicit IPv4 connection and the full PostgreSQL TLS handshake both succeed.
  socket.connect = (port, host) => connect({ port, host, family: 4 });
  return socket;
};

export const createGymRehearsalClient = (connectionString) => {
  const connectionUrl = new URL(connectionString);
  connectionUrl.searchParams.set("sslmode", "verify-full");

  return new pg.Client({
    connectionString: connectionUrl.toString(),
    connectionTimeoutMillis: 15_000,
    stream: createIpv4Socket,
  });
};
